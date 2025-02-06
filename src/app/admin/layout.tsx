import React from "react";
import Nav, { NavLink } from "../../components/Nav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href={"/admin"}>Dashboard</NavLink>
        <NavLink href={"/admin/products"}>Products</NavLink>
        <NavLink href={"/admin/users"}>Customers</NavLink>
        <NavLink href={"/admin/orders"}>Sales</NavLink>
      </Nav>
      <div className="w-full justify-center my-6 p-20">{children}</div>
    </>
  );
}
