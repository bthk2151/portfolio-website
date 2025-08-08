export default function SocialIconLink({ iconClass, redirectUrl }) {
  return (
    <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="text-muted me-3">
      <i className={`${iconClass} colored`} style={{ fontSize: '20px', marginLeft: '8px' }}></i>
    </a>
  );
};