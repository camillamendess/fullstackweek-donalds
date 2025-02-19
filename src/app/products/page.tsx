import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border-red-300 rounded-xl flex flex-col gap-4 justify-center items-center m-10">
      <h1 className="text-red-500">Products Page</h1>
      <Button className="">FSW</Button>
      <Input placeholder="Bora codar" />
    </div>
  )
}

export default ProductPage;