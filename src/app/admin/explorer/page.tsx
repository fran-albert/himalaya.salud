'use client';

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Building2,
  MapPin,
  Search,
  ChevronRight,
  Loader2,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from 'lucide-react';

import { explorerApi } from '@/lib/api/explorer';
import type {
  ProvinceItem,
  LocalityItem,
  InstitutionSummaryItem,
  ExplorerOfficeItem,
} from '@/lib/api/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { InstitutionDetailDialog } from '@/components/admin/institution-detail';

// ─── Resumen Tab ──────────────────────────────────────────────────────

function ResumenTab({ provinces }: { provinces: ProvinceItem[] }) {
  const totalInstitutions = useMemo(
    () => provinces.reduce((sum, p) => sum + p.institutionCount, 0),
    [provinces]
  );

  const sorted = useMemo(
    () => [...provinces].sort((a, b) => b.institutionCount - a.institutionCount),
    [provinces]
  );

  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Provincias</CardDescription>
            <CardTitle className="text-3xl">{provinces.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Instituciones</CardDescription>
            <CardTitle className="text-3xl">
              {totalInstitutions.toLocaleString('es-AR')}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Promedio por provincia</CardDescription>
            <CardTitle className="text-3xl">
              {provinces.length > 0
                ? Math.round(totalInstitutions / provinces.length).toLocaleString('es-AR')
                : 0}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Provinces table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Instituciones por provincia</CardTitle>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Provincia</TableHead>
              <TableHead className="text-right">Instituciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((p) => (
              <TableRow key={p.name}>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell className="text-right">
                  {p.institutionCount.toLocaleString('es-AR')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Instituciones Tab (hierarchical browse) ──────────────────────────

type BrowseLevel = 'provinces' | 'localities' | 'institutions';

function InstitucionesTab({ provinces }: { provinces: ProvinceItem[] }) {
  const [level, setLevel] = useState<BrowseLevel>('provinces');
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedLocality, setSelectedLocality] = useState<string | null>(null);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  // Fetch localities when province selected
  const { data: localities = [], isLoading: loadingLocalities } = useQuery({
    queryKey: ['explorer-localities', selectedProvince],
    queryFn: () => explorerApi.getLocalities(selectedProvince!),
    enabled: !!selectedProvince,
  });

  // Fetch institutions when locality selected
  const { data: institutions = [], isLoading: loadingInstitutions } = useQuery({
    queryKey: ['explorer-institutions', selectedProvince, selectedLocality],
    queryFn: () =>
      explorerApi.getInstitutionsByLocality(selectedProvince!, selectedLocality!),
    enabled: !!selectedProvince && !!selectedLocality,
  });

  const handleSelectProvince = (name: string) => {
    setSelectedProvince(name);
    setSelectedLocality(null);
    setLevel('localities');
  };

  const handleSelectLocality = (name: string) => {
    setSelectedLocality(name);
    setLevel('institutions');
  };

  const handleBack = () => {
    if (level === 'institutions') {
      setSelectedLocality(null);
      setLevel('localities');
    } else if (level === 'localities') {
      setSelectedProvince(null);
      setLevel('provinces');
    }
  };

  const handleOpenDetail = (id: string) => {
    setDetailId(id);
    setDetailOpen(true);
  };

  // Breadcrumb
  const breadcrumb = (
    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
      <button
        className="hover:text-foreground transition-colors"
        onClick={() => {
          setLevel('provinces');
          setSelectedProvince(null);
          setSelectedLocality(null);
        }}
      >
        Todas
      </button>
      {selectedProvince && (
        <>
          <ChevronRight className="h-3 w-3" />
          <button
            className="hover:text-foreground transition-colors"
            onClick={() => {
              setLevel('localities');
              setSelectedLocality(null);
            }}
          >
            {selectedProvince}
          </button>
        </>
      )}
      {selectedLocality && (
        <>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{selectedLocality}</span>
        </>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {breadcrumb}

      {level !== 'provinces' && (
        <Button variant="ghost" size="sm" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </Button>
      )}

      {/* Provinces level */}
      {level === 'provinces' && (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Provincia</TableHead>
                <TableHead className="text-right">Instituciones</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...provinces]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((p) => (
                  <TableRow
                    key={p.name}
                    className="cursor-pointer"
                    onClick={() => handleSelectProvince(p.name)}
                  >
                    <TableCell className="font-medium">{p.name}</TableCell>
                    <TableCell className="text-right">
                      {p.institutionCount.toLocaleString('es-AR')}
                    </TableCell>
                    <TableCell>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Localities level */}
      {level === 'localities' && (
        <Card>
          {loadingLocalities ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Localidad</TableHead>
                  <TableHead className="text-right">Instituciones</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {localities.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                      No se encontraron localidades
                    </TableCell>
                  </TableRow>
                ) : (
                  [...localities]
                    .sort((a, b) => b.institutionCount - a.institutionCount)
                    .map((l) => (
                      <TableRow
                        key={l.name}
                        className="cursor-pointer"
                        onClick={() => handleSelectLocality(l.name)}
                      >
                        <TableCell className="font-medium">{l.name}</TableCell>
                        <TableCell className="text-right">
                          {l.institutionCount.toLocaleString('es-AR')}
                        </TableCell>
                        <TableCell>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          )}
        </Card>
      )}

      {/* Institutions level */}
      {level === 'institutions' && (
        <Card>
          {loadingInstitutions ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Direccion</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {institutions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                      No se encontraron instituciones
                    </TableCell>
                  </TableRow>
                ) : (
                  institutions.map((inst) => (
                    <TableRow
                      key={inst.id}
                      className="cursor-pointer"
                      onClick={() => handleOpenDetail(inst.id)}
                    >
                      <TableCell className="font-medium">{inst.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {inst.address || '-'}
                      </TableCell>
                      <TableCell>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </Card>
      )}

      <InstitutionDetailDialog
        institutionId={detailId}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  );
}

// ─── Consultorios Tab ─────────────────────────────────────────────────

function ConsultoriosTab() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: offices = [], isLoading } = useQuery({
    queryKey: ['explorer-offices'],
    queryFn: () => explorerApi.getOffices(),
  });

  const filtered = useMemo(() => {
    if (!searchTerm) return offices;
    const lower = searchTerm.toLowerCase();
    return offices.filter(
      (o) =>
        o.name?.toLowerCase().includes(lower) ||
        o.address?.toLowerCase().includes(lower) ||
        o.institution?.name?.toLowerCase().includes(lower) ||
        o.city?.toLowerCase().includes(lower)
    );
  }, [offices, searchTerm]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 max-w-sm">
        <Input
          placeholder="Buscar por nombre, direccion, institucion..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <Button variant="ghost" size="icon" onClick={() => setSearchTerm('')}>
            <XCircle className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isLoading && filtered.length === 0 ? (
        <Card>
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        </Card>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Institucion</TableHead>
                <TableHead>Direccion</TableHead>
                <TableHead>Ciudad</TableHead>
                <TableHead className="text-center">Ubicacion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    {searchTerm
                      ? 'No se encontraron consultorios con ese filtro'
                      : 'No hay consultorios'}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((office) => (
                  <TableRow key={office.id}>
                    <TableCell className="font-medium">{office.name}</TableCell>
                    <TableCell>
                      {office.institution ? (
                        <span>{office.institution.name}</span>
                      ) : (
                        <Badge variant="outline">Independiente</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {office.address || '-'}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {office.city || '-'}
                    </TableCell>
                    <TableCell className="text-center">
                      {office.location ? (
                        <CheckCircle className="h-4 w-4 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          {filtered.length > 0 && (
            <div className="px-4 py-3 border-t text-sm text-muted-foreground">
              {filtered.length === offices.length
                ? `${offices.length} consultorios`
                : `${filtered.length} de ${offices.length} consultorios`}
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

// ─── Main Explorer Page ───────────────────────────────────────────────

export default function AdminExplorerPage() {
  const {
    data: provinces = [],
    isLoading: loadingProvinces,
  } = useQuery({
    queryKey: ['explorer-provinces'],
    queryFn: () => explorerApi.getProvinces(),
    staleTime: 1000 * 60 * 5,
  });

  if (loadingProvinces) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Explorador de Datos</h1>
          <p className="text-muted-foreground">
            Instituciones, consultorios y medicos del sistema
          </p>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-10 w-64" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Explorador de Datos</h1>
        <p className="text-muted-foreground">
          Instituciones, consultorios y medicos del sistema
        </p>
      </div>

      <Tabs defaultValue="resumen">
        <TabsList>
          <TabsTrigger value="resumen">
            <Building2 className="h-4 w-4 mr-2" />
            Resumen
          </TabsTrigger>
          <TabsTrigger value="instituciones">
            <Building2 className="h-4 w-4 mr-2" />
            Instituciones
          </TabsTrigger>
          <TabsTrigger value="consultorios">
            <MapPin className="h-4 w-4 mr-2" />
            Consultorios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resumen" className="mt-6">
          <ResumenTab provinces={provinces} />
        </TabsContent>

        <TabsContent value="instituciones" className="mt-6">
          <InstitucionesTab provinces={provinces} />
        </TabsContent>

        <TabsContent value="consultorios" className="mt-6">
          <ConsultoriosTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
