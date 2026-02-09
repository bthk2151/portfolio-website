interface SocialIconLinkProps {
    iconClass: string;
    redirectUrl: string;
}

export default function SocialIconLink({ iconClass, redirectUrl }: SocialIconLinkProps) {
    return (
        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="text-muted me-3 text-decoration-none">
            <i className={`${iconClass} colored`} style={{ fontSize: '20px', marginLeft: '8px' }}></i>
        </a>
    );
};