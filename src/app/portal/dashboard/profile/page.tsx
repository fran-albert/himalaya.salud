'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  User,
  Phone,
  MapPin,
  Briefcase,
  Languages,
  Award,
  FileText,
  Loader2,
  Save,
  X,
  Pencil,
} from 'lucide-react';
import { toast } from 'sonner';

import { profileApi } from '@/lib/api/profile';
import {
  contactSchema,
  professionalSchema,
  biographySchema,
  type ContactFormData,
  type ProfessionalFormData,
  type BiographyFormData,
} from '@/lib/validations/profile';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type EditMode = 'none' | 'contact' | 'professional' | 'biography';

export default function ProfilePage() {
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState<EditMode>('none');

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: profileApi.getProfile,
  });

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const professionalForm = useForm<ProfessionalFormData>({
    resolver: zodResolver(professionalSchema),
  });

  const biographyForm = useForm<BiographyFormData>({
    resolver: zodResolver(biographySchema),
  });

  const contactMutation = useMutation({
    mutationFn: profileApi.updateContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      setEditMode('none');
      toast.success('Información de contacto actualizada');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al actualizar');
    },
  });

  const professionalMutation = useMutation({
    mutationFn: profileApi.updateProfessional,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      setEditMode('none');
      toast.success('Información profesional actualizada');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al actualizar');
    },
  });

  const biographyMutation = useMutation({
    mutationFn: profileApi.updateBiography,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      setEditMode('none');
      toast.success('Biografía actualizada');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al actualizar');
    },
  });

  const startEditContact = () => {
    if (profile) {
      contactForm.reset({
        phoneNumber: profile.phoneNumber || '',
        address: profile.address || '',
        neighborhood: profile.neighborhood || '',
        city: profile.city || '',
        province: profile.province || '',
        postalCode: profile.postalCode || '',
      });
    }
    setEditMode('contact');
  };

  const startEditProfessional = () => {
    if (profile) {
      professionalForm.reset({
        yearsExperience: profile.yearsExperience || 0,
        languages: profile.languages || [],
        certifications: profile.certifications || [],
        tags: profile.tags || [],
      });
    }
    setEditMode('professional');
  };

  const startEditBiography = () => {
    if (profile) {
      biographyForm.reset({
        biography: profile.biography || '',
      });
    }
    setEditMode('biography');
  };

  const onSubmitContact = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const onSubmitProfessional = (data: ProfessionalFormData) => {
    professionalMutation.mutate(data);
  };

  const onSubmitBiography = (data: BiographyFormData) => {
    biographyMutation.mutate({ biography: data.biography || '' });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
        <Skeleton className="h-48" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">No se pudo cargar el perfil</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Mi Perfil</h1>
        <p className="text-muted-foreground">
          Gestiona tu información profesional
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="professional">Profesional</TabsTrigger>
          <TabsTrigger value="biography">Biografía</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          {/* Basic Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Información básica
              </CardTitle>
              <CardDescription>
                Esta información se muestra en tu perfil público
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-muted-foreground">Nombre completo</Label>
                  <p className="font-medium">{profile.firstName} {profile.lastName}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Email</Label>
                  <p className="font-medium">{profile.email}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Matrícula</Label>
                  <p className="font-medium">{profile.licenseNumber || 'No especificada'}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Especialidad</Label>
                  <p className="font-medium">{profile.specialty?.name || 'No especificada'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Información de contacto
                </CardTitle>
                <CardDescription>
                  Datos de contacto y ubicación
                </CardDescription>
              </div>
              {editMode !== 'contact' && (
                <Button variant="outline" size="sm" onClick={startEditContact}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Editar
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {editMode === 'contact' ? (
                <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Teléfono</Label>
                      <Input
                        id="phoneNumber"
                        placeholder="+54 11 1234-5678"
                        {...contactForm.register('phoneNumber')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input
                        id="address"
                        placeholder="Av. Corrientes 1234"
                        {...contactForm.register('address')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="neighborhood">Barrio</Label>
                      <Input
                        id="neighborhood"
                        placeholder="Palermo"
                        {...contactForm.register('neighborhood')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ciudad</Label>
                      <Input
                        id="city"
                        placeholder="Buenos Aires"
                        {...contactForm.register('city')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Provincia</Label>
                      <Input
                        id="province"
                        placeholder="CABA"
                        {...contactForm.register('province')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Código Postal</Label>
                      <Input
                        id="postalCode"
                        placeholder="C1043"
                        {...contactForm.register('postalCode')}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setEditMode('none')}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={contactMutation.isPending}>
                      {contactMutation.isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Save className="mr-2 h-4 w-4" />
                      )}
                      Guardar
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label className="text-muted-foreground">Teléfono</Label>
                    <p className="font-medium">{profile.phoneNumber || 'No especificado'}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Dirección</Label>
                    <p className="font-medium">{profile.address || 'No especificada'}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Barrio</Label>
                    <p className="font-medium">{profile.neighborhood || 'No especificado'}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Ciudad</Label>
                    <p className="font-medium">{profile.city || 'No especificada'}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Provincia</Label>
                    <p className="font-medium">{profile.province || 'No especificada'}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Código Postal</Label>
                    <p className="font-medium">{profile.postalCode || 'No especificado'}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professional" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Información profesional
                </CardTitle>
                <CardDescription>
                  Experiencia, idiomas y certificaciones
                </CardDescription>
              </div>
              {editMode !== 'professional' && (
                <Button variant="outline" size="sm" onClick={startEditProfessional}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Editar
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {editMode === 'professional' ? (
                <form onSubmit={professionalForm.handleSubmit(onSubmitProfessional)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearsExperience">Años de experiencia</Label>
                    <Input
                      id="yearsExperience"
                      type="number"
                      min={0}
                      {...professionalForm.register('yearsExperience', { valueAsNumber: true })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="languages">Idiomas (separados por coma)</Label>
                    <Input
                      id="languages"
                      placeholder="Español, Inglés, Portugués"
                      defaultValue={profile.languages?.join(', ')}
                      onChange={(e) => {
                        const langs = e.target.value.split(',').map(l => l.trim()).filter(Boolean);
                        professionalForm.setValue('languages', langs);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="certifications">Certificaciones (separadas por coma)</Label>
                    <Input
                      id="certifications"
                      placeholder="ACLS, BLS, etc."
                      defaultValue={profile.certifications?.join(', ')}
                      onChange={(e) => {
                        const certs = e.target.value.split(',').map(c => c.trim()).filter(Boolean);
                        professionalForm.setValue('certifications', certs);
                      }}
                    />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setEditMode('none')}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={professionalMutation.isPending}>
                      {professionalMutation.isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Save className="mr-2 h-4 w-4" />
                      )}
                      Guardar
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div>
                    <Label className="text-muted-foreground">Años de experiencia</Label>
                    <p className="font-medium">
                      {profile.yearsExperience ? `${profile.yearsExperience} años` : 'No especificado'}
                    </p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground flex items-center gap-2">
                      <Languages className="h-4 w-4" />
                      Idiomas
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profile.languages && profile.languages.length > 0 ? (
                        profile.languages.map((lang, i) => (
                          <Badge key={i} variant="secondary">{lang}</Badge>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-sm">No especificados</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label className="text-muted-foreground flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Certificaciones
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profile.certifications && profile.certifications.length > 0 ? (
                        profile.certifications.map((cert, i) => (
                          <Badge key={i} variant="outline">{cert}</Badge>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-sm">No especificadas</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biography" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Biografía
                </CardTitle>
                <CardDescription>
                  Cuéntale a tus pacientes sobre ti
                </CardDescription>
              </div>
              {editMode !== 'biography' && (
                <Button variant="outline" size="sm" onClick={startEditBiography}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Editar
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {editMode === 'biography' ? (
                <form onSubmit={biographyForm.handleSubmit(onSubmitBiography)} className="space-y-4">
                  <div className="space-y-2">
                    <Textarea
                      id="biography"
                      placeholder="Escribe sobre tu experiencia, formación y enfoque profesional..."
                      className="min-h-[200px]"
                      {...biographyForm.register('biography')}
                    />
                    <p className="text-sm text-muted-foreground">
                      {biographyForm.watch('biography')?.length || 0}/2000 caracteres
                    </p>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setEditMode('none')}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={biographyMutation.isPending}>
                      {biographyMutation.isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Save className="mr-2 h-4 w-4" />
                      )}
                      Guardar
                    </Button>
                  </div>
                </form>
              ) : (
                <div>
                  {profile.biography ? (
                    <p className="whitespace-pre-wrap">{profile.biography}</p>
                  ) : (
                    <p className="text-muted-foreground">
                      Aún no has escrito tu biografía. Cuéntale a tus pacientes sobre tu experiencia y formación.
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
