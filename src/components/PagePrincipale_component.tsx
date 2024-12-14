import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimal } from "../model/IAnimal_model";  
import { Alert, Button, Card, Container, Grid, Snackbar, Typography,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

export default function PagePrincipale() {
  const tableauVide: IAnimal[] = [];
  const intl = useIntl();
  const [animaux, setTableauAnimal] = useState(tableauVide);
  const navigate = useNavigate();
  const [message, setMessage] = useState<{
    text: string;
    severity: "success" | "error";
  } | null>(null);

  // Effect hook pour récupérer les animaux via une API
  useEffect(() => {
    axios
      .get("https://api-projet-final-x97q.onrender.com")
      .then((response) => {
        setTableauAnimal(response.data.animaux); 
      })
      .catch(() => {
        setMessage({
          text: intl.formatMessage({
            id: "erreur.chargement",
            defaultMessage: "Impossible de charger les animaux.",
          }),
          severity: "error",
        });
      });
  }, []); 

  function Ajouter() {
    navigate("/formulaireAjout"); 
  }

  function Recherche() {
    navigate("/rechercheNom");  
    }

  if (animaux !== tableauVide) {
    return (
      <>
        <Container sx={{ paddingTop: 8, marginBottom: 15 }}>
          <Button
            sx={{
              backgroundColor: "#2f4f4f",
              borderRadius: 2,
              color: "white",
              margin: 1,
            }}
            onClick={Recherche}
          >
            <FormattedMessage id="bouton.recherche" defaultMessage="Rechercher un animal" />
          </Button>
          <Button
            sx={{
              backgroundColor: "#2f4f4f",
              borderRadius: 2,
              color: "white",
              margin: 1,
            }}
            onClick={Ajouter} 
          >
            <FormattedMessage id="bouton.ajouter" defaultMessage="Ajouter un animal" />
          </Button>
        </Container>

        <Grid
          container
          spacing={1}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          {animaux &&
            animaux.map((animal) => {
              return (
                <Card
                  key={animal._id}
                  sx={{
                    minHeight: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#bdb76b",
                    color: "#2f4f4f",
                    fontSize: 24,
                    fontWeight: "bold",
                    width: 200,
                    margin: 2,
                  }}
                >
                  <div>
                    <Typography sx={{ padding: 2 }}>{animal.nom}</Typography>
                    <Button
                      onClick={() => OuvrirAnimal(animal)}
                      sx={{ minHeight: 50, minWidth: 10 }}
                    >
                      <Typography sx={{ color: "#a52a2a" }}>
                        <FormattedMessage id="bouton.information" defaultMessage="Informations" />
                      </Typography>
                    </Button>
                  </div>
                </Card>
              );
            })}
        </Grid>

        {message && (
          <Snackbar
            open
            autoHideDuration={6000}
            onClose={() => setMessage(null)}
          >
            <Alert
              onClose={() => setMessage(null)}
              severity={message.severity}
              sx={{ width: "100%" }}
            >
              {message.text}
            </Alert>
          </Snackbar>
        )}
      </>
    );
  } else {
    return <Typography variant="h3"><FormattedMessage id="chargement" defaultMessage="Chargement..." /></Typography>;
  }

  function OuvrirAnimal(animal: IAnimal) {
    navigate(`/pageAnimal/${animal._id}`);
  }
}
