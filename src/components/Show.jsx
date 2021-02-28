import "../styles.css";

const Show = (props) => {
  const { result } = props;
  console.log(result);

  return (
    <div className="show">
      {result.map((e, i) => {
        return (
          <>
            <div>
              {i === 0 ? (
                <div>
                  <div className="image">
                    <img src={e.owner.avatar_url} alt="" />
                  </div>
                  <h3 style={{ textAlign: "center", marginTop: "10px" }}>
                    {e.owner.login}
                  </h3>
                </div>
              ) : null}
              <div key={i} className="showgrid">
                <div>Repository: {e.name}</div>
                <div>
                  <a href={e.html_url} target="_blank">
                    <button>Open Repository</button>
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Show;
