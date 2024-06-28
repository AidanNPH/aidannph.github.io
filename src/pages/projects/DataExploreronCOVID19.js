import styles from "./Project.module.css";

const DataExploreronCOVID19 = () => {
    const captions = [
        {
            "content": "Viewing information with charts.",
            "image": require("../../assets/DataExploreronCOVID19/2.png")
        },
        {
            "content": "A search feature was implemented to filter the locations to show. For better user experience, the search result updates on every key stroke. When the input is matches a continent name, the result also shows the countries in that continent.",
            "image": require("../../assets/DataExploreronCOVID19/3.png")
        },
        {
            "content": "Viewing information with tables.",
            "image": require("../../assets/DataExploreronCOVID19/1.png")
        }
    ]

    return (
        <div className={styles.main}>
            <h2>Data Explorer on COVID19</h2>
            <p>A desktop application that visualizes data related to COVID-19 data, such as case counts, deaths, and vaccination rates, from around the world using various forms, such as graphs and tables. The application aims to provide an insightful and informative presentation of COVID-19 data.</p>
            {captions.map((caption, i) => (
                <div key={i} className={styles.caption}>
                    <img src={caption.image} alt={caption.content} />
                    <p>{caption.content}</p>
                </div>
            ))}
        </div>
    );
};

export default DataExploreronCOVID19;