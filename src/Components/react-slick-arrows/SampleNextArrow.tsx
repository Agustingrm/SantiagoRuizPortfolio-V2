function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "green",
        height: '100%',
        marginRight: '25px',
        width:'100px',
        cursor: 'url(../rightArrow.svg), pointer',
      }}
      onClick={onClick}
    />
  );
}

export default SampleNextArrow;
