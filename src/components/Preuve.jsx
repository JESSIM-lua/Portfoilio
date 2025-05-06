import React from "react";
// import "../App.css";
import "../styles/Preuve.css";

const Preuve = () => {
  const handleClick = (link, value) => {
    if (value === true) {
      window.open(link, "_blank");
    }
  };

  const data = [
    {
      type: "Réalisation en cours de formation",
      rows: [
        {
          name: "TP - GLPI - OCS",
          period: "06/11/2024 - 03/12/2025",
          values: [true, false, false, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1lSNkFPIj06V8-EUOkWifaxChf9G42pui/view?usp=sharing",
        },
        {
          name: "GLPI - TP de gestion d'incident où nous avons vu les différents niveaux dans la hiérarchie",
          period: "11/09/2024 - 02/10/2024",
          values: [false, true, false, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1OzxTZGk3nvCfEASlllmqQcjMrcp9IiE-/view?usp=sharing",
        },
        {
          name: "Développement Présence en ligne - TP mené seul - Création d’un site web Wordpress, le but étant qu’il ait le meilleur référencement.",
          period: "17/01/2024 - 19/04/2025",
          values: [false, false, true, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1PM6UnRm8_SiXMW5XL0cVOHti5zS8hOk1/view?usp=sharing",
        },
        {
          name: "Introspection - Nous devons nous décrire et décrire la voie que nous souhaitons prendre",
          period: "11/09/2023 - 19/04/2025",
          values: [false, false, false, false, false, true],
          valueLink:
            "https://drive.google.com/file/d/1wen34OGuevf5ne3AUl-isC6RzE-yTjDb/view?usp=sharing",
        },
      ],
    },

    {
      type: "Réalisation en milieu professionnel en cours de seconde année",
      rows: [
        {
          name: "Versionning sur git de l’applicative",
          period: "03/03/2025 - 26/04/2025",
          values: [true, false, false, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/1ncGQSqNfF8EArs1BDs6nIUL1WSr04fgW/view?usp=sharing",
        },
        {
          name: "Traitement de demandes via un Kanban (Trello)",
          period: "03/03/2025 - 25/04/2025",
          values: [false, true, false, false, false, false],
          valueLink:
            "https://drive.google.com/file/d/18DlCPMdGA8UycaZKukJXjbukifvTNEGl/view?usp=sharing",
        },
        {
          name: "Création d’une application web (Walrus)",
          period: "03/03/2025 - 26/04/2027",
          values: [false, false, false, true, false, false],
          valueLink:
            "https://drive.google.com/file/d/18DlCPMdGA8UycaZKukJXjbukifvTNEGl/view?usp=sharing",
        },
        {
          name: "Déploiement d’une application web (Walrus)",
          period: "03/03/2025 - 25/04/2026",
          values: [false, false, false, false, true, false],
          valueLink:
            "https://drive.google.com/file/d/1_wAX_NPfiBXA5pz0b_bSsVRDadKdJdxS/view?usp=sharing",
        },
      ],
    },
  ];

  const headers = [
    "Gérer le patrimoine informatique",
    "Répondre aux incidents et aux demandes d’assistance et d’évolution",
    "Développer la présence en ligne de l’organisation",
    "Travailler en mode projet",
    "Mettre à disposition des utilisateurs un service informatique",
    "Organiser son développement professionnel",
  ];

  return (
    <div className="mainContainer">
      {data.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="font-bold text-lg mb-2">{section.type}</h2>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-100">
                  Nom de la réalisation
                </th>
                <th className="border border-gray-300 p-2 bg-gray-100">
                  Période
                </th>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 p-2 bg-gray-100 text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="border border-gray-300 p-2 text-center italic text-gray-500"
                  >
                    (Aucune réalisation enregistrée)
                  </td>
                </tr>
              ) : (
                section.rows.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-gray-300 p-2">{row.name}</td>
                    <td className="border border-gray-300 p-2">{row.period}</td>
                    {row.values.map((value, j) => (
                      <td
                        key={j}
                        className={
                          row.values[j]
                            ? "linkContainer"
                            : "border border-gray-300 p-2 text-center text-gray-400"
                        }
                        onClick={() =>
                          handleClick(row.valueLink, row.values[j])
                        }
                      >
                        {value ? (
                          <span className="text-gray-400">x</span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Preuve;
