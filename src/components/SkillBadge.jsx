export default function SkillBadge({ text, iconClass, isMain }) {
  return (
    <span className={`badge ${isMain == 1 ? "bg-dark" : ""} d-inline-flex align-items-center p-2 me-2 mb-2`} style={{ backgroundColor: '#444a57' }}>
      {text}
      <i className={`${iconClass} colored`} style={{ fontSize: '20px', marginLeft: '8px' }}></i>
    </span>
  );
};