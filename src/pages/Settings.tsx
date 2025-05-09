import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  Divider,
  Switch,
  TextField,
  Button,
  Avatar,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Select,
  MenuItem,
  Grid,
  SelectChangeEvent
} from '@mui/material';
import {
  Settings as SettingsIcon,
  AccountCircle,
  Notifications,
  Security,
  PrivacyTip,
  DarkMode,
  HelpOutline,
  Logout,
  Visibility,
  VisibilityOff,
  Edit,
  CloudUpload
} from '@mui/icons-material';

interface ProfileData {
  name: string;
  email: string;
  bio: string;
  phone: string;
}

export default function Settings() {
  const [tabValue, setTabValue] = useState<number>(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('en');
  const [timezone, setTimezone] = useState<string>('UTC');
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    bio: '',
    phone: ''
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const handleTimezoneChange = (event: SelectChangeEvent) => {
    setTimezone(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SettingsIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
        <Typography variant="h4" component="h1">
          Settings
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Compte" icon={<AccountCircle />} iconPosition="start" />
          <Tab label="Notifications" icon={<Notifications />} iconPosition="start" />
          <Tab label="Securité" icon={<Security />} iconPosition="start" />
          <Tab label="Confidentialité" icon={<PrivacyTip />} iconPosition="start" />
          <Tab label="Préférences" icon={<DarkMode />} iconPosition="start" />
        </Tabs>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        {tabValue === 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Informations sur le profil
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ width: 120, height: 120, mb: 2 }} src="/path/to/profile.jpg" />
                <Button
                  variant="outlined"
                  startIcon={<CloudUpload />}
                  sx={{ mb: 2 }}
                >
                  Télécharger une photo
                </Button>
              </Grid>

              <Grid item xs={12} md={8}>
                <TextField
                  fullWidth
                  label="Nom et prénom"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  margin="normal"
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleProfileChange}
                  margin="normal"
                  multiline
                  rows={3}
                />
                <TextField
                  fullWidth
                  label="Numéro de téléphone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button variant="contained" color="primary">
                Enregistrer les modifications
              </Button>
            </Box>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Préférences de notifications
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <List>
              <ListItem>
                <ListItemText
                  primary="Notifications par courrier électronique"
                  secondary="Recevez des notifications par e-mail pour les mises à jour importantes"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notificationsEnabled}
                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Notifications poussées"
                  secondary="Recevez des notifications push sur votre appareil"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notificationsEnabled}
                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Notifications SMS"
                  secondary="Recevoir des notifications par SMS"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notificationsEnabled}
                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Box>
        )}

        {tabValue === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Paramètres de sécurité
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <List>
              <ListItem>
                <ListItemText
                  primary="Changer le mot de passe"
                  secondary="Mettez à jour le mot de passe de votre compte"
                />
                <ListItemSecondaryAction>
                  <Button variant="outlined" startIcon={<Edit />}>
                    Change
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />

              <ListItem>
                <ListItemText
                  primary="Authentification à deux facteurs"
                  secondary="Ajoutez une couche de sécurité supplémentaire à votre compte"
                />
                <ListItemSecondaryAction>
                  <Switch />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />

              <ListItem>
                <ListItemText
                  primary="Séances actives"
                  secondary="Afficher et gérer les sessions de connexion actives"
                />
                <ListItemSecondaryAction>
                  <Button variant="outlined">View All</Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Changer le mot de passe
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <TextField
              fullWidth
              label="Mot de passe actuel"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              label="Nouveau mot de passe"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Confirmer le nouveau mot de passe"
              type={showPassword ? 'text' : 'password'}
              margin="normal"
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button variant="contained" color="primary">
                Mettre à jour le mot de passe
              </Button>
            </Box>
          </Box>
        )}

        {tabValue === 3 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Paramètres de confidentialité
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <List>
              <ListItem>
                <ListItemText
                  primary="Visibilité du profil"
                  secondary="Contrôlez qui peut voir votre profil"
                />
                <ListItemSecondaryAction>
                  <Select
                    value="public"
                    size="small"
                    sx={{ minWidth: 120 }}
                  >
                    <MenuItem value="public">publique</MenuItem>
                    <MenuItem value="friends">Amis seulement</MenuItem>
                    <MenuItem value="private">Privé</MenuItem>
                  </Select>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Partage de données"
                  secondary="Autoriser le partage de données d'utilisation anonymes"
                />
                <ListItemSecondaryAction>
                  <Switch />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Services de localisation"
                  secondary="Autoriser l'accès à votre position"
                />
                <ListItemSecondaryAction>
                  <Switch />
                </ListItemSecondaryAction>
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Data Management
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="outlined" color="primary">
                Exporter des données
              </Button>
              <Button variant="outlined" color="error">
                Supprimer le compte
              </Button>
            </Box>
          </Box>
        )}

        {tabValue === 4 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Preferences
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <List>
              <ListItem>
                <ListItemText
                  primary="Mode sombre"
                  secondary="Basculer entre le thème clair et le thème sombre"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={darkModeEnabled}
                    onChange={() => setDarkModeEnabled(!darkModeEnabled)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Langue"
                  secondary="Sélectionnez votre langue préférée"
                />
                <ListItemSecondaryAction>
                  <Select
                    value={language}
                    onChange={handleLanguageChange}
                    size="small"
                    sx={{ minWidth: 120 }}
                  >
                    <MenuItem value="en">Anglais</MenuItem>
                    <MenuItem value="es">Espagnol</MenuItem>
                    <MenuItem value="fr">Français</MenuItem>
                    <MenuItem value="de">Allemand</MenuItem>
                  </Select>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Fuseau horaire"
                  secondary="Définissez votre fuseau horaire local"
                />
                <ListItemSecondaryAction>
                  <Select
                    value={timezone}
                    onChange={handleTimezoneChange}
                    size="small"
                    sx={{ minWidth: 150 }}
                  >
                    <MenuItem value="UTC">UTC</MenuItem>
                    <MenuItem value="EST">Eastern Time (EST)</MenuItem>
                    <MenuItem value="PST">Pacific Time (PST)</MenuItem>
                    <MenuItem value="CET">Central European (CET)</MenuItem>
                  </Select>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Box>
        )}
      </Paper>

      
    </Container>
  );
}