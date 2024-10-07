import Explore from "./explore";
import Hero from "./hero/index";
import HolidayFooter from "./holidayFooter";
import ItemDisplay from "./itemDisplay/index";

const SeasonalHoliday = () => {
  return (
    <>
      <Hero />
      <ItemDisplay />
      <Explore />
      <HolidayFooter />
    </>
  );
};

export default SeasonalHoliday;
