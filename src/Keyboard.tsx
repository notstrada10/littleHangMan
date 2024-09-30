import styles from "./Keyboard.module.css";

const KEYS = [
    { key: "q", area: "q" }, { key: "w", area: "w" }, { key: "e", area: "e" }, { key: "r", area: "r" }, { key: "t", area: "t" },
    { key: "y", area: "y" }, { key: "u", area: "u" }, { key: "i", area: "i" }, { key: "o", area: "o" }, { key: "p", area: "p" },
    { key: "a", area: "a" }, { key: "s", area: "s" }, { key: "d", area: "d" }, { key: "f", area: "f" }, { key: "g", area: "g" },
    { key: "h", area: "h" }, { key: "j", area: "j" }, { key: "k", area: "k" }, { key: "l", area: "l" },
    { key: "z", area: "z" }, { key: "x", area: "x" }, { key: "c", area: "c" }, { key: "v", area: "v" }, { key: "b", area: "b" },
    { key: "n", area: "n" }, { key: "m", area: "m" }
];

type KeyboardProps = {
    disabled?: boolean,
    activeLetter: string[],
    inactiveLetter: string[],
    addGuessedLetter: (letter: string) => void
};

export function Keyboard({ activeLetter, inactiveLetter, addGuessedLetter, disabled = false }: KeyboardProps) {
    return (
        <div className={styles.keyboardGrid}>
            {KEYS.map(({ key, area }) => {
                const isActive = activeLetter.includes(key);
                const isInactive = inactiveLetter.includes(key);

                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""} ${styles[area]}`}
                        key={key}
                        disabled={isInactive || isActive || disabled}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}
