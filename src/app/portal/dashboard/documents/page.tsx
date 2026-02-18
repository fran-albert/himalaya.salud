'use client';

import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useDropzone } from 'react-dropzone';
import {
  FileText,
  Upload,
  Trash2,
  Loader2,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  AlertCircle,
} from 'lucide-react';
import { toast } from 'sonner';

import { documentsApi } from '@/lib/api/documents';
import type { DocumentType, DocumentStatus, DoctorDocument } from '@/lib/api/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const documentTypes: { value: DocumentType; label: string }[] = [
  { value: 'license_photo', label: 'Foto de Matrícula' },
  { value: 'certificate', label: 'Certificado' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'id_document', label: 'Documento de Identidad' },
];

const documentTypeLabels: Record<DocumentType, string> = {
  license_photo: 'Matrícula',
  certificate: 'Certificado',
  diploma: 'Diploma',
  id_document: 'DNI',
};

function getStatusBadge(status: DocumentStatus) {
  switch (status) {
    case 'approved':
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle2 className="mr-1 h-3 w-3" />
          Aprobado
        </Badge>
      );
    case 'pending':
      return (
        <Badge variant="secondary">
          <Clock className="mr-1 h-3 w-3" />
          Pendiente
        </Badge>
      );
    case 'rejected':
      return (
        <Badge variant="destructive">
          <XCircle className="mr-1 h-3 w-3" />
          Rechazado
        </Badge>
      );
    default:
      return <Badge variant="outline">Desconocido</Badge>;
  }
}

export default function DocumentsPage() {
  const queryClient = useQueryClient();
  const [selectedType, setSelectedType] = useState<DocumentType>('license_photo');
  const [isUploading, setIsUploading] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: documentsApi.list,
  });

  const uploadMutation = useMutation({
    mutationFn: ({ file, type }: { file: File; type: DocumentType }) =>
      documentsApi.upload(file, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast.success('Documento subido exitosamente');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al subir el documento');
    },
    onSettled: () => {
      setIsUploading(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: documentsApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast.success('Documento eliminado');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al eliminar el documento');
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('El archivo no puede superar los 5MB');
        return;
      }

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        toast.error('Solo se permiten imágenes (JPG, PNG, WebP) o PDF');
        return;
      }

      setIsUploading(true);
      uploadMutation.mutate({ file, type: selectedType });
    },
    [selectedType, uploadMutation]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    disabled: isUploading,
  });

  const handleViewDocument = async (doc: DoctorDocument) => {
    try {
      const response = await documentsApi.getViewUrl(doc.id);
      window.open(response.url, '_blank');
    } catch {
      toast.error('Error al obtener el documento');
    }
  };

  const documents = data?.documents || [];
  const hasRequiredDocuments = documents.some(
    (d) => d.documentType === 'license_photo' && d.status === 'approved'
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documentos</h1>
        <p className="text-muted-foreground">
          Sube tus documentos para verificar tu cuenta
        </p>
      </div>

      {!hasRequiredDocuments && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Documentos requeridos</AlertTitle>
          <AlertDescription>
            Para verificar tu cuenta, debes subir al menos una foto de tu matrícula profesional.
          </AlertDescription>
        </Alert>
      )}

      {/* Upload Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Subir documento
          </CardTitle>
          <CardDescription>
            Arrastra o selecciona un archivo (JPG, PNG, WebP o PDF, máx. 5MB)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-end">
            <div className="flex-1 max-w-xs">
              <label className="text-sm font-medium mb-2 block">
                Tipo de documento
              </label>
              <Select
                value={selectedType}
                onValueChange={(v) => setSelectedType(v as DocumentType)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {documentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
              transition-colors
              ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'}
              ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            <input {...getInputProps()} />
            {isUploading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-muted-foreground">Subiendo documento...</p>
              </div>
            ) : isDragActive ? (
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-10 w-10 text-primary" />
                <p className="text-primary font-medium">Suelta el archivo aquí</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-10 w-10 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Arrastra un archivo aquí o haz clic para seleccionar
                </p>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG, WebP o PDF (máx. 5MB)
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Mis documentos
          </CardTitle>
          <CardDescription>
            {documents.length} documento{documents.length !== 1 ? 's' : ''} subido{documents.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {documents.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No has subido ningún documento todavía
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{doc.fileName}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {documentTypeLabels[doc.documentType]}
                        </Badge>
                        <span>•</span>
                        <span>
                          {new Date(doc.createdAt).toLocaleDateString('es-AR')}
                        </span>
                      </div>
                      {doc.status === 'rejected' && doc.reviewNotes && (
                        <p className="text-sm text-destructive mt-1">
                          Motivo: {doc.reviewNotes}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(doc.status)}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewDocument(doc)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {doc.status === 'pending' && (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>¿Eliminar documento?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Esta acción no se puede deshacer. El documento será eliminado permanentemente.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteMutation.mutate(doc.id)}
                              className="bg-destructive hover:bg-destructive/90"
                            >
                              {deleteMutation.isPending ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                'Eliminar'
                              )}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
