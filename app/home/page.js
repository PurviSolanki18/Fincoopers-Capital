import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Navbar from '@/components/Navbar';
import Header from '../../components/Header';
import Typewriter from '@/components/TypeWriter';
import { Typography, Button, Grid, Box } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const HomePage = () => {
  const statistics = [
    {
      number: "300,000+",
      title: "Loans Disbursed"
    },
    {
      number: "14,800+",
      title: "Pincodes"
    },
    {
      number: "19,000+ Cr",
      title: "Amount Disbursed till date"
    },
    {
      number: "4,100+",
      title: "Cities & Towns"
    }
  ];
  return (
    <div>
      <Header />
      <Navbar />
      <Grid
        container
        direction="column"
        // justifyContent="center"
        alignItems="center"
        sx={{
          py: 5,
          width: '100%',
          backgroundImage: `url('../assets/bg1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginLeft: '8%' }}>
              <Typography variant="h4" sx={{ fontFamily: "Mukta", fontSize: { xs: '1.5rem', md: '2.5rem' }, color: 'black', fontWeight: 700, marginBottom: '1rem' }}>
                Empowering Your Financial
                Future with Every<Typewriter text=" Click! " delay={150} infinite />
              </Typography>
              <Typography variant="body1" sx={{ color: '#2E2E2E', fontSize: { xs: '0.875rem', md: '14px' }, marginBottom: '1rem' }}>
                Welcome to <span style={{ color: "#0087C0" }}>Fincoopers Capital</span>, where we believe in transforming dreams into reality for rural communities. We specialize in providing accessible loans tailored to your needs, ensuring minimal interest rates and maximum support.
              </Typography>

              <Button
                sx={{
                  display: { xs: 'inline-flex', md: 'inline-flex' },
                  marginRight: 7,
                  fontWeight: 700
                }}
                variant="outlined"
                startIcon={<ExitToAppIcon />}
              >
                Explore
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', }}>
            <img src='../assets/2ndimgs.gif' alt='handShake' style={{ maxWidth: '535px', height: { xs: "535px", sm: "535px", md: "535px" } }} />
          </Grid>
        </Grid>


        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: '11px',
                borderColor: '#0087C0',
                boxShadow: `2px 2px 2px 2px rgba(0, 135, 192, 0.5)`,
                width: "579px",
                height: "302px",
                marginLeft: "10%",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '16px', // Adjust padding as needed
                }}
              >
                {statistics.map((statistic, index) => (
                  <Grid key={index} style={{ flex: '0 0 48%', margin: '1%' }}>
                    <Typography sx={{marginLeft:"10%",fontStyle:"Poppins",fontSize:"35px",lineHeight:"50px",fontWeight:500,color:"#494949"}}>{statistic.number}</Typography>
                    <Typography sx={{marginLeft:"10%",fontStyle:"Poppins",fontSize:"16px",lineHeight:"22px",fontWeight:500,color:"#494949"}}>{statistic.title}</Typography>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid item marginLeft="15%">
              <Typography sx={{ fontSize: "35px", fontStyle: "Poppins", fontWeight: 700, color: "#494949", marginLeft: 5 }}>We have</Typography>
              {/* <Grid sx={{backgroundImage: `url('../assets/Ellipse.png')`,}}> */}
              <Typography sx={{
                backgroundImage: `url('../assets/Ellipse.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                fontSize: "35px",
                fontStyle: "Poppins",
                fontWeight: 700,
                color: "#0087C0",
                paddingLeft: "12px"
              }}>Grown businesses</Typography>
              {/* </Grid>            */}
              <Typography sx={{ fontSize: "35px", fontStyle: "Poppins", fontWeight: 700, color: "#494949", marginLeft: 5 }}>and still counting</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
