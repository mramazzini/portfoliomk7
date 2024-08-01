import exp from "constants";

const RomaPizzaData = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Roma Pizza</h1>
      <div className="divider divider-primary" />
      <h2 className="text-lg font-bold">Overview</h2>
      <p>
        Roma Pizza was a website I created in an attempt to appeal to a more
        commercial audience.
        <br /> The website was designed to be a template for a new pizza
        restaurant, with a focus on a clean and modern design.
      </p>
      <div className="divider" />
      <h2 className="text-lg font-bold">Featuring</h2>
      <ul className="list-disc list-inside">
        <li>Responsive Design</li>
        <li>Modern and Clean Design</li>
        <li>About Page</li>
        <li>Menu Page</li>
        <li>Contact Page</li>
        <li>Hero</li>
      </ul>
      <div className="divider" />
      <h2 className="text-lg font-bold">Technologies</h2>
      <ul className="list-disc list-inside">
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>DaisyUI</li>
        <li>Vercel</li>
      </ul>
    </div>
  );
};

export default RomaPizzaData;
