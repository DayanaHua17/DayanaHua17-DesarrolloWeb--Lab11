"use client";

import UserCard from "../components/UserCard";
import Button from "../components/Button";
import CardContainer from "../components/CardContainer";

export default function Home() {
  const users = [
    { name: "Sugey Aranda", email: "sugey@example.com", role: "Administrador" },
    { name: "Ricardo Coello", email: "ricardo@example.com", role: "Supervisor" },
    { name: "Cintia López", email: "cintia@example.com", role: "Usuario" },
  ];

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Lista de Usuarios</h1>

      <CardContainer>
        <Button onClick={() => alert("Has hecho clic")}>Crear Nuevo Usuario</Button>
      </CardContainer>

      {users.map((user, index) => (
        <CardContainer key={index}>
          <UserCard name={user.name} email={user.email} role={user.role} />
        </CardContainer>
      ))}
    </main>
  );
}
