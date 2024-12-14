import { useEffect, useState } from "react";
import { Container, Card, Typography, Button, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PageAnimal() {
  const [animal, setAnimal] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await axios.get(`https://api-projet-final-x97q.onrender.com/${id}`);
        setAnimal(response.data);
        setLoading(false);
      } catch (err) {
        setError("Erreur lors du chargement des données.");
        setLoading(false);
      }
    };
    if (id) fetchAnimalData();
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container sx={{ marginTop: 3 }}>
      <Card sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Détails de l'animal
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Nom : {animal.nom}</Typography>
          <Typography variant="body1">Type : {animal.type}</Typography>
          <Typography variant="body1">Race : {animal.race}</Typography>
          <Typography variant="body1">Âge : {animal.age} ans</Typography>
          <Typography variant="body1">Poids : {animal.poids} kg</Typography>
          <Typography variant="body1">Stérilisé : {animal.sterilise ? "Oui" : "Non"}</Typography>
          <Typography variant="body1">Date de naissance : {new Date(animal.dateNaissance).toLocaleDateString()}</Typography>
          {animal.observations && (
            <Typography variant="body1">Observations : {animal.observations}</Typography>
          )}
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/animaux/modifier/${id}`)}
            sx={{ marginRight: 2 }}
          >
            Modifier
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/animaux")}
          >
            Retour à la liste
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
