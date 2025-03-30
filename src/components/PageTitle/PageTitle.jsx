import "./PageTitle.scss";

const PageTitle = ({ name, id }) => {
    return (
        <h2 className="page-title" id={id}>
            {name}
        </h2>
    );
};

export default PageTitle;
