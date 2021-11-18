function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "green",
        height: "100%",
        marginLeft: "25px",
        width: "100px",
        cursor: 'url(../leftArrow.svg), pointer',
        zIndex:2,
      }}
      onClick={onClick}
    />
  );
}

export default SamplePrevArrow;
