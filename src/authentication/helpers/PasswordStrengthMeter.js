import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ passwordInput }) => {
  const testResult = zxcvbn(passwordInput);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EB5757";
      case 2:
        return "#FFCC00";
      case 3:
        return "#64DCBF";
      case 4:
        return "#31D0AA";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: progressColor(),
    height: "8px",
    borderRadius: "5px",
    transition: "width 0.5s ease",
  });

  return (
    <>
      <div
        className="progress"
        style={{
          height: "5px",
          background: "#e0e0e0",
          borderRadius: "5px",
          marginTop: "8px",
        }}
      >
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <div
        className="pw-indicator"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "8px",
        }}
      >
        <p style={{ color: "#828282" }}>Password Strength: </p>
        <p style={{ color: progressColor() }}>{createPassLabel()}</p>
      </div>
    </>
  );
};

export default PasswordStrengthMeter;
