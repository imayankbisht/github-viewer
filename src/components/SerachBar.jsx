import "../styles.css";

const Serachbar = (props) => {
  return (
    <>
      <div className="container">
        <h1 className="heading">Search Github repos easier than before.</h1>
        <form onSubmit={props.handleSubmit} className="input">
          <input
            type="text"
            placeholder="Enter Github Username"
            value={props.search}
            onChange={props.inputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Serachbar;
