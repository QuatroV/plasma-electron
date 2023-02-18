type BuildArrayOf<
  Quantifier extends "exactly" | "at least",
  Count extends number,
  Type,
  Current extends Type[]
> = Current["length"] extends Count
  ? Quantifier extends "exactly"
    ? [...Current]
    : [...Current, ...Type[]]
  : BuildArrayOf<Quantifier, Count, Type, [...Current, Type]>;

/** An array of a given type comprised of either exactly or at least a certain count of that type. */
export type ArrayOf<
  Quantifier extends "exactly" | "at least",
  Count extends number,
  Type
> = BuildArrayOf<Quantifier, Count, Type, []>;
