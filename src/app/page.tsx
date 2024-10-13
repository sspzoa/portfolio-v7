import Grid from '@/islands/Grid';
import Info from '@/islands/Info';

export default function Home() {
  return (
    <div className="w-full flex flex-col md:flex-row h-[100dvh]">
      <Info />
      <Grid />
    </div>
  );
}
