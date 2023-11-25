import { useSelector } from "react-redux";

export function useCart() {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const { status, list } = product;

  if (status !== "ready") {
    return [];
  }
  const result = cart.list.map((item) => {
    const product = list.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });
  return result;
}
