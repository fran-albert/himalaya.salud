import { NextResponse } from "next/server";

// La app ya está disponible. Este endpoint solo atendía formularios retirados.
export async function POST() {
  return NextResponse.json(
    {
      error:
        "La lista de espera cerró. Conocé los planes o escribinos desde Contacto.",
      contactUrl: "/contacto",
      plansUrl: "/#planes",
    },
    { status: 410 },
  );
}
