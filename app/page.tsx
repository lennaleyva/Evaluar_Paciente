import { patientService } from "../services/patientService";
import PageContent from "../components/PageContent";

export default async function Home() {
  const patients = await patientService.list();

  return <PageContent patients={patients} />;
}
