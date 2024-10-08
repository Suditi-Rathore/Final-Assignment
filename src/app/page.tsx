import SeasonalHoliday from "@/container/seasonalHoliday/index";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SeasonalHoliday />
    </Suspense>
  
  )
}
