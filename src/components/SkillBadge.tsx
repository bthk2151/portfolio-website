interface SkillBadgeProps {
    text: string;
    iconClass: string;
    isMain?: number;
    includeMargin?: number;
}

export default function SkillBadge({ text, iconClass, isMain = 1, includeMargin = 1 }: SkillBadgeProps) {
    return (
        <span className={`badge ${isMain == 1 ? "bg-dark" : ""} d-inline-flex align-items-center p-2 ${includeMargin == 1 ? "me-2 mb-2" : ""}`} style={{ backgroundColor: '#444a57' }}>
            {text}
            <i className={`${iconClass} colored`} style={{ fontSize: '20px', marginLeft: '8px' }}></i>
        </span>
    );
};