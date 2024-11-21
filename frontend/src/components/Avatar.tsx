interface AvatarProp {
    name: string;
}

function Avatar({ name }: AvatarProp) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-purple-200 rounded-full">
      <span className="font-bold text-purple-900 text-2xl">
        {name[0]}
      </span>
    </div>
  );
}

export default Avatar;