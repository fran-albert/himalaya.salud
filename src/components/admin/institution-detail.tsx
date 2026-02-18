'use client';

import { useQuery } from '@tanstack/react-query';
import { Loader2, MapPin, Phone, Hash, X } from 'lucide-react';

import { explorerApi } from '@/lib/api/explorer';
import type { ExplorerInstitutionDetail } from '@/lib/api/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface InstitutionDetailDialogProps {
  institutionId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstitutionDetailDialog({
  institutionId,
  open,
  onOpenChange,
}: InstitutionDetailDialogProps) {
  const { data: institution, isLoading } = useQuery({
    queryKey: ['explorer-institution', institutionId],
    queryFn: () => explorerApi.getInstitutionDetail(institutionId!),
    enabled: open && !!institutionId,
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : institution ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg">{institution.name}</DialogTitle>
            </DialogHeader>

            {/* General info */}
            <div className="space-y-3">
              {institution.address && (
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                  <span>
                    {institution.address}
                    {institution.city && `, ${institution.city}`}
                    {institution.province && `, ${institution.province}`}
                  </span>
                </div>
              )}
              {institution.phoneNumber && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>{institution.phoneNumber}</span>
                </div>
              )}
              {institution.refesCode && (
                <div className="flex items-center gap-2 text-sm">
                  <Hash className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>REFES: {institution.refesCode}</span>
                </div>
              )}

              {/* Location badge */}
              <div className="flex gap-2">
                {institution.location ? (
                  <Badge variant="default">Con ubicacion</Badge>
                ) : (
                  <Badge variant="secondary">Sin ubicacion</Badge>
                )}
              </div>
            </div>

            {/* REFES info */}
            {(institution.typologyName || institution.financingType || institution.geoStatus) && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Datos REFES</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    {institution.typologyName && (
                      <>
                        <span className="text-muted-foreground">Tipologia</span>
                        <span>{institution.typologyName}</span>
                      </>
                    )}
                    {institution.typologyCode && (
                      <>
                        <span className="text-muted-foreground">Codigo tipologia</span>
                        <span>{institution.typologyCode}</span>
                      </>
                    )}
                    {institution.categoryName && (
                      <>
                        <span className="text-muted-foreground">Categoria</span>
                        <span>{institution.categoryName}</span>
                      </>
                    )}
                    {institution.financingType && (
                      <>
                        <span className="text-muted-foreground">Financiamiento</span>
                        <span>{institution.financingType}</span>
                      </>
                    )}
                    {institution.geoStatus && (
                      <>
                        <span className="text-muted-foreground">Estado geo</span>
                        <span>{institution.geoStatus}</span>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* Stats */}
            {(institution.doctorCount !== undefined || (institution.specialties && institution.specialties.length > 0)) && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Estadisticas</h4>
                  {institution.doctorCount !== undefined && (
                    <p className="text-sm">
                      <span className="text-muted-foreground">Medicos asociados: </span>
                      <span className="font-medium">{institution.doctorCount}</span>
                    </p>
                  )}
                  {institution.specialties && institution.specialties.length > 0 && (
                    <div>
                      <span className="text-sm text-muted-foreground">Especialidades: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {institution.specialties.map((s) => (
                          <Badge key={s} variant="outline" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Doctors table */}
            {institution.doctors && institution.doctors.length > 0 && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">
                    Medicos ({institution.doctors.length})
                  </h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Matricula</TableHead>
                        <TableHead>Especialidad</TableHead>
                        <TableHead>Telefono</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {institution.doctors.map((doctor) => (
                        <TableRow key={doctor.id}>
                          <TableCell className="font-medium">
                            {doctor.firstName} {doctor.lastName}
                          </TableCell>
                          <TableCell>{doctor.licenseNumber || '-'}</TableCell>
                          <TableCell>{doctor.specialty?.name || '-'}</TableCell>
                          <TableCell>{doctor.phoneNumber || '-'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="py-8 text-center text-muted-foreground">
            No se pudo cargar la institucion
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
