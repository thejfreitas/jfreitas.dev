import { Greetings } from "@app/components/Greetings";

export default function Home() {
  return (
    <main className="main-container">
      <section>
        <Greetings />
        <h1 className="text-shadow-2xs">Jose de Freitas Jr.</h1>
        <p className="text-shadow-md">
          I am a 👨‍💻 Software Engineer with expertise in building and maintaining
          systems, APIs and websites.
        </p>
      </section>
    </main>
  );
}
