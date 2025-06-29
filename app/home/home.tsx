export function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen" >
        <h1>Andrew Still</h1>
        <h2>Here are some quick links</h2>
        <div className="grid grid-cols-2 place-items-center">
          {resources.map(({ href, text }) => (
            <a
              className="m-2"
              href={href}
              key={href}
              target="_blank"
              rel="noreferrer"
            >
              <h3>
                {text}
              </h3>
            </a>
          ))}
        </div>
        <p className="mt-6">Please ignore the basic website, more to come.</p>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://www.linkedin.com/in/andrew-still-yay/",
    text: "LinkedIn",
  },
  {
    href: "https://github.com/AndrewDragonCh/",
    text: "GitHub",
  },
  {
    href: "https://docs.google.com/document/d/1aBypR-b4xcuaz5yupW8g150_mv21jKCaG4k0WnqPwbg/edit?usp=sharing",
    text: "Resume (In Progress)",
  },
  {
    href: "https://www.credly.com/badges/d4f09d4c-567e-4be3-a9b6-7242eeab0847",
    text: "A+ Certification (Temp)",
  }
];