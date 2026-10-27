import RandomPumpkins from "../components/RandomPumpkins";

function Footer() {
  return (
    <footer class="bg-[#2d0f3f] text-white text-center py-4 block bottom-0 left-0 w-full relative">
      <RandomPumpkins count={100} />
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <p class="text-sm">&copy; 2026 Campire Cooking. All rights reserve. Holloween Special!</p>
      </div>
    </footer>
  );
}
export default Footer;
