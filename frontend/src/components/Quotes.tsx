function Quotes() {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center px-12 gap-8">
      <div className="max-w-2xl text-3xl font-extrabold">
        "The customer service I received was exceptional. The support team went
        above and beyond to address my concerns."
      </div>

      <div className="flex flex-col">
        <div className="text-lg font-medium">Jules Winnfield</div>
        <div className="text-sm font-thin text-slate-400 -mt-1">CEO, Acme Inc</div>
      </div>
    </div>
  );
}

export default Quotes;
