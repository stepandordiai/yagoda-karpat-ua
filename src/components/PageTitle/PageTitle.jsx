import "./PageTitle.scss";

const PageTitle = ({ name, id }) => {
    return (
        <h3 className="page-title" id={id}>
            {name}
        </h3>
    );
};

export default PageTitle;
