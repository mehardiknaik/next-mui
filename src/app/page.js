import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container disableGutters>
      <Box>
        {Array(10)
          .fill(1)
          .map((x, i) => (
            <Card sx={{ mt: 2 }} key={i}>
              <Typography variant="h2" color={"primary.main"}>
                Hello World ~
              </Typography>
            </Card>
          ))}
      </Box>
    </Container>
  );
}
