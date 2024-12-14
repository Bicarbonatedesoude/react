import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { AnimalProvider } from "./context/Animal_context";
import PagePrincipale from "./components/PagePrincipale_component";
import PageAnimal from "./components/AnimalList_component";
import FormulaireAjout from "./components/AnimalForm_component";
import { LangueProvider, useLangue } from "./context/Animal_langue";

// Importer les traductions
import translationsFr from "./lang/fr.json";
import translationsEn from "./lang/en.json";

// Définir le type des traductions
interface Translations {
  [key: string]: { [key: string]: string };
}

const translations: Translations = {
  fr: translationsFr,
  en: translationsEn,
};

// Composant qui gère la barre d'application avec traduction
const AppBarWithLang = () => {
  const { langue, changerLangue } = useLangue();
  const t = (key: string) => translations[langue]?.[key] || key;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t("gestionAnimaux")}
        </Typography>
        <Button color="inherit" onClick={() => changerLangue("fr")}>
          FR
        </Button>
        <Button color="inherit" onClick={() => changerLangue("en")}>
          EN
        </Button>
        <Button color="inherit">{t("seDeconnecter")}</Button>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <LangueProvider>
      <AnimalProvider>
        <BrowserRouter>
          <AppBarWithLang />
          <Routes>
            <Route path="/" element={<PagePrincipale />} />
            <Route path="/animal/:id" element={<PageAnimal />} />
            <Route path="/ajout" element={<FormulaireAjout />} />
          </Routes>
        </BrowserRouter>
      </AnimalProvider>
    </LangueProvider>
  );
}

export default App;
