import { useArticles } from "../Context/articlesContext"
import { useCategories } from "../Context/categoriesContext";
import { Settings } from "lucide-react"

const Home = () => {
  const { articles } = useArticles();
  const { categories } = useCategories();

  console.log(articles)

  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto bg-background-light dark:bg-background-dark">
      <Header />
      <CartStatistiques articles={articles} categories={categories} />

      <div className="flex-1 p-8 pt-0 space-y-8">
        {/* <!-- Main Activity / Table Section --> */}
        <div className="xl:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Artiques Recentes</h3>
            <a className="text-sm font-medium text-primary hover:text-blue-400 flex items-center gap-1"
              href="#">Voir Tout <span
                className="material-symbols-outlined text-base">arrow_forward</span></a>
          </div>

          <div
            className="bg-white dark:bg-[#1e2736] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              {articles.length >= 0 ?
                (
                  <table className="w-full text-left text-sm">
                    <thead
                      className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="px-6 py-4">Nom de l'Article</th>
                        <th className="px-6 py-4">Réf.</th>
                        <th className="px-6 py-4">Catégorie</th>
                        <th className="px-6 py-4">Stock</th>
                        <th className="px-6 py-4">Statut</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody
                      className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-200">
                      {articles.map((article) => (
                        <tr
                          key={article.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                        >
                          <td className="px-6 py-4 font-medium flex items-center gap-3">
                            <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                              <Settings className="w-9 h-9 text-primary" />
                            </div>
                            <p>{article.name}</p>
                          </td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-400">BP-2024-X</td>
                          <td className="px-6 py-4">Freins</td>
                          <td className="px-6 py-4 font-bold text-red-500">2 restant</td>
                          <td className="px-6 py-4">
                            <span
                              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">Critique</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              className="text-primary hover:text-blue-400 font-medium text-xs">Réapprovisionner</button>
                          </td>
                        </tr>
                      ))}
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                            <Settings className="w-9 h-9 text-primary" />
                          </div>
                          <p>Plaquettes de frein céramique</p>
                        </td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">BP-2024-X</td>
                        <td className="px-6 py-4">Freins</td>
                        <td className="px-6 py-4 font-bold text-red-500">2 restant</td>
                        <td className="px-6 py-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">Critique</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            className="text-primary hover:text-blue-400 font-medium text-xs">Réapprovisionner</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-700 bg-center bg-cover"
                            style={{ backgroundImage: "url('src/assets/home2.png')" }}>
                          </div>Filtre à Huile Type A
                        </td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">OF-9921-A</td>
                        <td className="px-6 py-4">Filtres</td>
                        <td className="px-6 py-4 font-bold text-orange-500">8 restant</td>
                        <td className="px-6 py-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">Faible</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            className="text-primary hover:text-blue-400 font-medium text-xs">Réapprovisionner</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-700 bg-center bg-cover"
                            style={{ backgroundImage: "url('src/assets/home3.png')" }}>
                          </div>Jeu de Bougies d'Allumage
                        </td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">SP-4410-Z</td>
                        <td className="px-6 py-4">Allumage</td>
                        <td className="px-6 py-4 font-bold text-orange-500">12 restant</td>
                        <td className="px-6 py-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">Faible</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            className="text-primary hover:text-blue-400 font-medium text-xs">Réapprovisionner</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-700 bg-center bg-cover"
                            style={{ backgroundImage: "url('src/assets/home4.png')" }}>
                          </div>Ampoule de Phare H4
                        </td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">HL-5500-W</td>
                        <td className="px-6 py-4">Éclairage</td>
                        <td className="px-6 py-4 font-bold text-red-500">0 restant</td>
                        <td className="px-6 py-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">En
                            Rupture</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            className="text-primary hover:text-blue-400 font-medium text-xs">Commander</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Aucun Article</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Aucun article disponible</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        {/* <!-- Quick Actions / Side Panel --> */}
        <div className="flex flex-col gap-6">
          {/* <!-- Quick Actions --> */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Actions Rapides</h3>
            <div className="grid grid-cols-4 gap-3">
              {
                [
                  { name: "Ajouter un Article", icon: "add_shopping_cart" },
                  { name: "Modifier un Article", icon: "edit", },
                  { name: "Supprimer un Article", icon: "delete" },
                  { name: "Reapprovisionner un Article", icon: "refresh" },
                ].map((card, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-[#1e2736] border border-slate-200 dark:border-slate-800 hover:border-primary text-slate-600 dark:text-slate-300 hover:text-primary transition-all shadow-sm cursor-pointer">
                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                    <span className="text-sm font-semibold">{card.name}</span>
                  </button>
                ))}
            </div>
          </div>
          {/* <!-- Warehouse Status (Mini Map placeholder) --> */}
          <div className="flex flex-col gap-3 grow">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Capacité de l'Entrepôt</h3>
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-cover bg-center" data-alt="Warehouse shelves with boxes"
                style={{ backgroundImage: "url('src/assets/map.png')" }}>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-bold text-sm">Entrepôt Principal</span>
                  <span className="text-white font-bold text-2xl">84%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 backdrop-blur-sm">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "84%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </main>
  )
}

const Header = () => {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4 p-8 pb-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-extrabold tracking-tight">Tableau de Bord</h2>
        <p className="text-slate-500 dark:text-slate-400 text-base">Bon retour, voici le résumé de votre
          inventaire.</p>
      </div>
      {/* <!-- Search Bar --> */}
      <div className="w-full max-w-md">
        <label className="relative flex items-center group">
          <span
            className="absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined">search</span>
          <input
            className="w-full h-12 pl-12 pr-4 bg-white dark:bg-[#1e2736] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
            placeholder="Rechercher des références, catégories..." type="text" />
        </label>
      </div>
    </header>
  )
}

const CartStatistiques = ({ articles, categories }) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-500",
      border: "hover:border-blue-500/50",
      badge: "bg-blue-50 dark:bg-blue-900/20",
    },
    red: {
      bg: "bg-red-50 dark:bg-red-900/20",
      text: "text-red-500",
      border: "hover:border-red-500/50",
      badge: "bg-red-50 dark:bg-red-900/20",
    },
    yellow: {
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      text: "text-yellow-500",
      border: "hover:border-yellow-500/50",
      badge: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  };

  const articlesRupture = articles.filter((article) => article.quantity === 0);

  const donnees = [
    { title: "Total des Articles", value: articles.length, percentage: "0%", icon: "layers", color: "blue" },
    { title: "Rupture de Stock", value: articlesRupture.length, percentage: "0%", icon: "error", color: "red" },
    { title: "Catégories Actives", value: categories.length, percentage: "0%", icon: "category", color: "yellow" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 pt-4">
      {donnees.map((card, index) => {
        const c = colorMap[card.color];
        return (
          <div
            key={index}
            className={`flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-[#1e2736] border border-slate-200 dark:border-slate-800 shadow-sm ${c.border} transition-colors cursor-default group`}
          >
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg ${c.bg} ${c.text}`}>
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <span className={`flex items-center ${c.text} ${c.badge} px-2 py-1 rounded text-xs font-bold`}>
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span> {card.percentage}
              </span>
            </div>
            <div>
              <p className={`text-slate-500 dark:text-slate-400 text-sm font-medium group-hover:${c.text} transition-colors`}>
                {card.title}
              </p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{card.value}</h3>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Home