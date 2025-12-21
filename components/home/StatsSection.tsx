import CountUp from "@/components/common/CountUp";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="grid md:grid-cols-3 gap-12 text-center">
      {stats.map(stat => (
        <div key={stat.label}>
          <h3 className="text-5xl font-bold">
            <CountUp end={stat.value} />
          </h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
