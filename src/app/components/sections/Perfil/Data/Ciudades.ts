interface Ciudad {
  id: number;
  label: string;
  value: string;
}

const ciudades: Ciudad[] = [
  { id: 1, label: "Acassuso", value: "Acassuso" },
  { id: 2, label: "Adrogué", value: "Adrogué" },
  { id: 3, label: "Almirante Brown", value: "Almirante Brown" },
  { id: 4, label: "Avellaneda", value: "Avellaneda" },
  { id: 5, label: "Banfield", value: "Banfield" },
  { id: 6, label: "Banfield Este", value: "Banfield Este" },
  { id: 7, label: "Banfield Oeste", value: "Banfield Oeste" },
  { id: 8, label: "Beccar", value: "Beccar" },
  { id: 9, label: "Bella Vista", value: "Bella Vista" },
  { id: 10, label: "Berazategui", value: "Berazategui" },
  { id: 11, label: "Berazategui Oeste", value: "Berazategui Oeste" },
  { id: 12, label: "Bernal", value: "Bernal" },
  { id: 13, label: "Boulogne", value: "Boulogne" },
  { id: 14, label: "Burzaco", value: "Burzaco" },
  { id: 16, label: "Chilavert", value: "Chilavert" },
  { id: 17, label: "Ciudad Evita", value: "Ciudad Evita" },
  { id: 18, label: "Ciudadela", value: "Ciudadela" },
  { id: 19, label: "Claypole", value: "Claypole" },
  { id: 20, label: "Don Bosco", value: "Don Bosco" },
  { id: 21, label: "Don Orione", value: "Don Orione" },
  { id: 22, label: "El Jagüel", value: "El Jagüel" },
  { id: 23, label: "El Palomar", value: "El Palomar" },
  { id: 24, label: "Escobar", value: "Escobar" },
  { id: 25, label: "Esteban Echeverría", value: "Esteban Echeverría" },
  { id: 26, label: "Ezeiza", value: "Ezeiza" },
  { id: 27, label: "Florencio Varela", value: "Florencio Varela" },
  { id: 28, label: "Florencio Varela Oeste", value: "Florencio Varela Oeste" },
  { id: 29, label: "General Rodríguez", value: "General Rodríguez" },
  { id: 30, label: "General San Martín", value: "General San Martín" },
  { id: 31, label: "Gerli", value: "Gerli" },
  { id: 32, label: "Glew", value: "Glew" },
  { id: 33, label: "Gonnet", value: "Gonnet" },
  { id: 34, label: "Hurlingham", value: "Hurlingham" },
  { id: 35, label: "Ituzaingó", value: "Ituzaingó" },
  { id: 36, label: "José C. Paz", value: "José C. Paz" },
  { id: 37, label: "José Mármol", value: "José Mármol" },
  { id: 38, label: "La Lucila", value: "La Lucila" },
  { id: 39, label: "La Matanza", value: "La Matanza" },
  { id: 40, label: "Lanús", value: "Lanús" },
  { id: 41, label: "Lanús Este", value: "Lanús Este" },
  { id: 42, label: "Lomas de Zamora", value: "Lomas de Zamora" },
  { id: 43, label: "Lomas del Mirador", value: "Lomas del Mirador" },
  { id: 44, label: "Longchamps", value: "Longchamps" },
  { id: 46, label: "Los Hornos", value: "Los Hornos" },
  { id: 47, label: "Los Polvorines", value: "Los Polvorines" },
  { id: 48, label: "Luis Guillón", value: "Luis Guillón" },
  { id: 50, label: "Malvinas Argentinas", value: "Malvinas Argentinas" },
  { id: 51, label: "Martínez", value: "Martínez" },
  { id: 52, label: "Merlo", value: "Merlo" },
  { id: 53, label: "Monte Grande", value: "Monte Grande" },
  { id: 54, label: "Moreno", value: "Moreno" },
  { id: 55, label: "Morón", value: "Morón" },
  { id: 56, label: "Muñiz", value: "Muñiz" },
  { id: 57, label: "Pilar", value: "Pilar" },
  { id: 58, label: "Quilmes", value: "Quilmes" },
  { id: 59, label: "Quilmes Oeste", value: "Quilmes Oeste" },
  { id: 60, label: "Rafael Calzada", value: "Rafael Calzada" },
  { id: 61, label: "Remedios de Escalada", value: "Remedios de Escalada" },
  { id: 62, label: "Ringuelet", value: "Ringuelet" },
  { id: 63, label: "San Andrés", value: "San Andrés" },
  { id: 64, label: "San Fernando", value: "San Fernando" },
  { id: 65, label: "San Isidro", value: "San Isidro" },
  { id: 67, label: "San Justo", value: "San Justo" },
  { id: 68, label: "San Martín", value: "San Martín" },
  { id: 69, label: "San Martín Centro", value: "San Martín Centro" },
  { id: 70, label: "San Miguel", value: "San Miguel" },
  { id: 71, label: "San Miguel Centro", value: "San Miguel Centro" },
  { id: 72, label: "San Miguel Sur", value: "San Miguel Sur" },
  { id: 73, label: "Sarandí", value: "Sarandí" },
  { id: 74, label: "Temperley", value: "Temperley" },
  { id: 75, label: "Tierras Altas", value: "Tierras Altas" },
  { id: 76, label: "Tigre", value: "Tigre" },
  { id: 77, label: "Tolosa", value: "Tolosa" },
  { id: 78, label: "Turdera", value: "Turdera" },
  { id: 79, label: "Vicente López", value: "Vicente López" },
  { id: 80, label: "Villa Adelina", value: "Villa Adelina" },
  { id: 81, label: "Villa Allende", value: "Villa Allende" },
  { id: 82, label: "Villa Ballester", value: "Villa Ballester" },
  { id: 83, label: "Villa Bonich", value: "Villa Bonich" },
  { id: 84, label: "Villa Brown", value: "Villa Brown" },
  { id: 85, label: "Villa Centenario", value: "Villa Centenario" },
  { id: 86, label: "Villa Domínico", value: "Villa Domínico" },
  { id: 87, label: "Villa Elisa", value: "Villa Elisa" },
  { id: 88, label: "Villa Elvira", value: "Villa Elvira" },
  { id: 89, label: "Villa Lynch", value: "Villa Lynch" },
  { id: 90, label: "Villa Martelli", value: "Villa Martelli" },
  { id: 91, label: "Wilde", value: "Wilde" },
  { id: 92, label: "Wilde Este", value: "Wilde Este" },
];

export default ciudades;