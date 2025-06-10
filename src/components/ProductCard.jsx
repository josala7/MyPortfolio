import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, Repo,Live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ marginTop: "10px" }}>
            {Live && (
              <Button
                variant="dark"
                href={Live.startsWith("http") ? Live : `https://${Live}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                Live
              </Button>
            )}
            {Repo && (
              <Button
                variant="light"
                href={Repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
