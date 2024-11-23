import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="
    bg—neut rat—900
    rounded—lg
    h-full
    w—full
    overflow-hidden
    overflow—y—auto">
      <Header>
        <div className="nb-2">
          <h1 className="text-white text-3xl font-semibold">
              Welcome Back
          </h1>
          <div className="
          grid
          grid-cols-1
          sn:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-3
          nt-4
          ">
              <ListItem
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"  
              />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-6 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest Songs
          </h1>
        </div>
        <div>
          List of Songs!
        </div>
      </div>
      </div>
  );
}
