import { Folder, FolderPlus } from "phosphor-react";
import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="flex">
      <div className="w-[6vw] h-[100vh] bg-brand-700 hidden md:flex flex-col items-center gap-y-10 p-3">
        <img src="/logo-minimal.png" alt="Logo minimalista" className="h-[10vh]"/>
        <div className="flex flex-col gap-y-10">
          <Link to={"/admin"}>
              <span className="flex flex-col items-center text-white font-medium">
                <Folder size={30} className="text-white"/>
                Listagem
              </span>
          </Link>
          
          <Link to={"/admin/criar-imovel"}>
            <span className="flex flex-col items-center text-white font-medium">
              <FolderPlus size={30} className="text-white"/>
              Cadastrar
            </span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}