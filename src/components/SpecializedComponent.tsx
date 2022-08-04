interface StackProps<T> {
  children: (item: T) => React.ReactElement;
  items: T[];
}

const Stack = <T extends unknown>({ items, children }: StackProps<T>) => (
  <>
    {items.map((item, index: number) => (
      <div key={index}>{children(item)}</div>
    ))}
  </>
);

export const Video = () => (
  <Stack items={[{ id: 1, title: "test", year: 2016 }]}>
    {({ id, title, year }) => (
      <div>
        {id}. {title}, year: {year}
      </div>
    )}
  </Stack>
);

export const Author = () => (
  <Stack items={[{ id: 1, name: "test" }]}>
    {({ id, name }) => (
      <div>
        {id}. {name}
      </div>
    )}
  </Stack>
);
