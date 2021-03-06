import styles from "./ChartBar.css";

export function ChartBar(props) {
    let fillHeight = "0%";
    if (props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100).toString().concat("%");
    }
    return (
        <div className={styles["chart-bar"]}>
            <div className={styles["chart-bar__inner"]}>
                <div
                    className={styles["chart-bar__fill"]}
                    style={{ height: fillHeight, backgroundColor: "#40005d", }}
                >
                </div>
            </div>
            <div className={styles["chart-bar__label"]}>{props.label}</div>
        </div>
    )
}