interface Props {
  params: {
    id: string;
  };
}

export default async function Product({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}
