const Sidebar = () => {
  return (
    <aside
      className="flex w-72 flex-col justify-between border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111722] p-4 transition-all">
      <div className="flex flex-col gap-4">
        {/* <!-- Branding --> */}
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="bg-primary/20 flex items-center justify-center rounded-lg h-10 w-10 text-primary">
            <span className="material-symbols-outlined text-2xl">directions_car</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-tight">AutoStock</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Gestionnaire de Magasin</p>
          </div>
        </div>
        {/* <!-- Navigation Links --> */}
        <nav className="flex flex-col gap-2 mt-4">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-md shadow-primary/20"
            href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-semibold">Tableau de Bord</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <p className="text-sm font-medium">Inventaire</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p className="text-sm font-medium">Commandes</p>
            <span
              className="ml-auto bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">3</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#">
            <span className="material-symbols-outlined">group</span>
            <p className="text-sm font-medium">Fournisseurs</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#">
            <span className="material-symbols-outlined">analytics</span>
            <p className="text-sm font-medium">Rapports</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Paramètres</p>
          </a>
        </nav>
      </div>
      {/* <!-- User Profile & Action --> */}
      <div className="flex flex-col gap-4">
        <button
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-bold">
          <span className="material-symbols-outlined text-lg">add</span>
          <span>Nouvel Article</span>
        </button>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex items-center gap-3 px-2">
          <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-primary/20"
            data-alt="User profile picture of a man"
            style={{ backgroundImage: 'url("src/assets/avatar.png")' }}>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Morgan</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Gestionnaire de Magasin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar