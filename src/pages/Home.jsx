import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="movie-detail">
            <img src="https://s3-alpha-sig.figma.com/img/dffb/b860/559f834e0275c009608027ccae5ee787?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rkpO0pLndEZ7dHynMJtiO9nZc99PuLuk24zTVIUT0MRQscYgwziIDSruNUsKcB9UqDNlHZUJqUC04E9WCs7kZg6jC1AC03vSYMBX1lGNvQYsvHGpHPyKzBBx7JtMVI8Vl0jMzhAN5Ha3CDWP-mNKGJgraDO6IQLyQnh4l5A0ASPvLjuKjVte4awXJu9XvPTBnkihWYkEW~yqnHtTzbIThNcRpkKZfExR5AnD-h8xsa3F8DaqE3rBzP6uA2Aw7BFz~Vp7AIkV62inMC26DGLemANIx9ibBrVEsDyaBbHdZAR7OmvXszESGSKES4oAyYIAFkLStffuJaweSH9z8PolvA__" alt="spider" />
            <div className="initial">
                <div className="frame">CBFC:U/A</div>
                <p>Action</p>
                <span>.</span>
                <p>Action</p>
                <span>.</span>
                <p>Action</p>
            </div>
        </div>
      </div>
    </>
  );
}
