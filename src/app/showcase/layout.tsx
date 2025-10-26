// src/app/showcase/layout.tsx
import Header from "../components/Header/Header";
export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main >{children}</main>
        </div>
    );
}