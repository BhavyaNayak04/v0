import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center  flex-col">
      <Navbar />
      <section className="py-8 content-container">
        <p className="max-w-3xl text-gray-600">
          Club Net is a platform that aims to connect students with clubs and
          organizations on campus. Our mission is to foster a vibrant community
          of passionate individuals by providing a space for students to
          discover, join, and engage with various clubs and events
        </p>
      </section>
      <section className="py-8 content-container">{/*  */}</section>
    </div>
  );
}
