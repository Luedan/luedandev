"use client";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#18181b",
    color: "#f3f3f3",
    fontFamily: "Helvetica",
    padding: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    border: "3px solid #FFD600",
    marginRight: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD600",
  },
  subtitle: {
    fontSize: 12,
    color: "#FFD600",
    marginBottom: 8,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD600",
    marginBottom: 6,
  },
  text: {
    fontSize: 11,
    color: "#f3f3f3",
    marginBottom: 2,
  },
  link: {
    color: "#FFD600",
    fontSize: 11,
  },
});

export default function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={"/pic.jpeg"} style={styles.photo} />
          <View>
            <Text style={styles.name}>Luis Atencia</Text>
            <Text style={styles.subtitle}>Líder Técnico</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contacto</Text>
          <Text style={styles.text}>Teléfono: (315) 309 6672</Text>
          <Text style={styles.text}>Email: atencia17@gmail.com</Text>
          <Text style={styles.text}>
            Dirección: Carrera 49C #75-14 Apto. 1, Barranquilla
          </Text>
          <Text style={styles.text}>Nacionalidad: Venezolano</Text>
          <Text style={styles.text}>PPT: 5.234.103</Text>
          <Text style={styles.link}>LinkedIn: linkedin.com/in/luedand2</Text>
          <Text style={styles.link}>GitHub: github.com/Luedan</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acerca de mí</Text>
          <Text style={styles.text}>
            He desempeñado un papel clave en el desarrollo y análisis de
            múltiples proyectos, aportando experiencia técnica y habilidades
            estratégicas. He mantenido y optimizado aplicaciones en producción,
            garantizando su rendimiento y eficiencia a largo plazo. Como mentor,
            impulsé el crecimiento profesional y la productividad de varios
            equipos. Además, lideré investigaciones para la implementación de
            nuevas tecnologías, mejorando los procesos de desarrollo. También
            contribuí activamente a la definición de objetivos estratégicos y a
            la dirección general de la empresa.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educación</Text>
          <Text style={styles.text}>
            Ingeniero de Sistemas — Universidad Nacional Experimental
            Politécnica de las Fuerzas Armadas, Maracaibo - Venezuela
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
          <Text style={styles.text}>
            Líder Técnico – Horbath Technologies (2024 - Actualidad)
          </Text>
          <Text style={styles.text}>
            • Control de piso: .NET, React, SQL Server
          </Text>
          <Text style={styles.text}>
            • Portal de clientes: React, Express, Postgres
          </Text>
          <Text style={styles.text}>
            • Aplicación de ventas: React Native, MongoDB, Postgres, NestJS
          </Text>
          <Text style={styles.text}>
            • Portal de pedidos internos: Next.js, Postgres
          </Text>
          <Text style={styles.text}>• Migración de proyectos Lambdas AWS</Text>
          <Text style={styles.text}>
            Líder Técnico – Wow Desarrollos Digitales (2021 - 2024)
          </Text>
          <Text style={styles.text}>
            • Proyectos financieros y contables, analista y mentor
          </Text>
          <Text style={styles.text}>
            • Frontend y backend: JavaScript, TypeScript, Node.js, React.js,
            Next.js, Docker
          </Text>
          <Text style={styles.text}>
            • Integración y despliegue: Azure DevOps y AWS
          </Text>
          <Text style={styles.text}>
            Tutor Académico – Fundación Estudiar y Trabajar (2023)
          </Text>
          <Text style={styles.text}>
            • Guía a estudiantes en desarrollo de software
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <Text style={styles.text}>
            Técnicas: Desarrollo Full-Stack, JavaScript & TypeScript, .NET & C#,
            Backend & Frontend, DevOps, Patrones de diseño y arquitecturas,
            Control de versiones, SCRUM + KANBAN
          </Text>
          <Text style={styles.text}>
            Blandas: Liderazgo, Aprendizaje continuo, Resolución de problemas,
            Gestión de equipos, Enseñanza y motivación
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cursos</Text>
          <Text style={styles.text}>
            NestJS: Desarrollos Backend Escalable con Node
          </Text>
          <Text style={styles.text}>
            NestJS + Microservicios: Aplicaciones Escalables y Modulares
          </Text>
          <Text style={styles.text}>
            NestJS: Microservicios con NestJS, AWS, Docker Profesional
          </Text>
          <Text style={styles.text}>
            React Native CLI: Aplicaciones Nativas para iOS y Android
          </Text>
          <Text style={styles.text}>Principios Solid y Clean Code</Text>
          <Text style={styles.text}>
            Aprende Programación Backend en C# .NET
          </Text>
          <Text style={styles.text}>
            AZ-204 Desarrollo de soluciones para Microsoft Azure
          </Text>
        </View>
      </Page>
    </Document>
  );
}
